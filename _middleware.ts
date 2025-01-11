import { NextResponse } from 'next/server';

export default function middleware(req: { cookies: { authToken: never; }; nextUrl: { pathname: string; }; }) {
    const token = req.cookies.authToken;

    if (!token && req.nextUrl.pathname.startsWith('/store/product/view')) {
        return NextResponse.redirect('/auth/login');
    }

    return NextResponse.next();
}
