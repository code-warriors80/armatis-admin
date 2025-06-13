export async function middleware(req: NextRequest) {
  console.log('🛠️ Pathname:', req.nextUrl.pathname)

  if (req.nextUrl.pathname === '/auth/login') {
    console.log('➡️ Redirecting from /auth/login to /')
    return NextResponse.redirect(new URL('/', req.url))
  }
  
  return NextResponse.next()
}

export const config = { matcher: '/:path*' }
