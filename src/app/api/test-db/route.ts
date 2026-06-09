import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function GET() {
    let connection;

    // Helper to get config with correct env vars
    const getConfig = (ssl: boolean) => ({
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USER || process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME || process.env.DB_DATABASE,
        ssl: ssl ? { rejectUnauthorized: false } : undefined
    });

    try {
        console.log('Attempting to connect to database...');

        try {
            // First try with SSL
            console.log('Trying with SSL...');
            connection = await mysql.createConnection(getConfig(true));
            console.log('Connected successfully with SSL');
        } catch (error: any) {
            // If SSL handshake failed, try without SSL
            if (error.code === 'HANDSHAKE_NO_SSL_SUPPORT') {
                console.log('SSL not supported by server, retrying without SSL...');
                connection = await mysql.createConnection(getConfig(false));
                console.log('Connected successfully without SSL');
            } else {
                throw error; // Re-throw other errors
            }
        }

        const [rows] = await connection.execute('SELECT 1 as result');

        return NextResponse.json({
            status: 'success',
            message: 'Database connection successful',
            data: rows
        });
    } catch (error: any) {
        console.error('Database connection failed:', error);
        return NextResponse.json({
            status: 'error',
            message: 'Database connection failed',
            error: error.message,
            code: error.code
        }, { status: 500 });
    } finally {
        if (connection) await connection.end();
    }
}
