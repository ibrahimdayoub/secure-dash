import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware (request: NextRequest) {
  const token = request.cookies.get('session')
  const { pathname } = request.nextUrl

  const isDashboardRoute = pathname.startsWith('/dashboard')
  const isAuthRoute = pathname === '/signin' || pathname === '/signup'

  if (isDashboardRoute && !token) {
    return NextResponse.redirect(new URL('/signin', request.url))
  }

  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/signin', '/signup']
}
