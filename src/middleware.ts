import { NextRequest, NextResponse } from 'next/server'

const publicRoutes = ['/', '/login', '/signup']

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Check route type
  const isPublicRoute = publicRoutes.includes(pathname)
  const isAdminRoute = pathname.startsWith('/admin')

  // ✅ Read token from cookies
  const token = req.cookies.get('token')?.value

  // If trying to access /admin without token → redirect
  if (isAdminRoute && !token) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  // If authenticated and visiting login/signup/home → redirect to /admin
  if (isPublicRoute && token) {
    return NextResponse.redirect(new URL('/admin', req.url))
  }

  return NextResponse.next()
}


export const config = { matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'], }
