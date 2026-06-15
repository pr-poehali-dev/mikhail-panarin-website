import json
import os
import psycopg2


def handler(event: dict, context) -> dict:
    '''
    Business: Принимает заявки на сотрудничество и бронирование с сайта музыканта
    Args: event - dict с httpMethod, body (name, contact, request_type, message)
          context - объект с request_id
    Returns: HTTP response со статусом обработки заявки
    '''
    method: str = event.get('httpMethod', 'POST')

    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400',
    }

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors_headers, 'body': ''}

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {**cors_headers, 'Content-Type': 'application/json'},
            'isBase64Encoded': False,
            'body': json.dumps({'error': 'Method not allowed'}),
        }

    body_data = json.loads(event.get('body', '{}'))
    name = (body_data.get('name') or '').strip()
    contact = (body_data.get('contact') or '').strip()
    request_type = (body_data.get('request_type') or 'Сотрудничество').strip()
    message = (body_data.get('message') or '').strip()

    if not name or not contact or not message:
        return {
            'statusCode': 400,
            'headers': {**cors_headers, 'Content-Type': 'application/json'},
            'isBase64Encoded': False,
            'body': json.dumps({'error': 'Заполните имя, контакт и сообщение'}),
        }

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()
    name_e = name.replace("'", "''")
    contact_e = contact.replace("'", "''")
    type_e = request_type.replace("'", "''")
    message_e = message.replace("'", "''")
    cur.execute(
        "INSERT INTO booking_requests (name, contact, request_type, message) "
        f"VALUES ('{name_e}', '{contact_e}', '{type_e}', '{message_e}') RETURNING id"
    )
    new_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()

    return {
        'statusCode': 200,
        'headers': {**cors_headers, 'Content-Type': 'application/json'},
        'isBase64Encoded': False,
        'body': json.dumps({'success': True, 'id': new_id}),
    }
