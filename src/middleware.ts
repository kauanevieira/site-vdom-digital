import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Permite acesso à página de construção
  if (pathname === '/under-construction') {
    return NextResponse.next()
  }
  
  // Permite acesso a arquivos estáticos
  if (pathname.startsWith('/_next') || 
      pathname.startsWith('/api') || 
      pathname.includes('.')) {
    return NextResponse.next()
  }
  
  // Redireciona todas as outras rotas para a página de construção
  return NextResponse.redirect(new URL('/under-construction', request.url))
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
