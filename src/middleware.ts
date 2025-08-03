import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  if (url.pathname.startsWith('/foo')) {
    return NextResponse.redirect('https://vg.no', 301);
  }

  if (url.pathname.startsWith('/fo')) {
    return NextResponse.redirect(new URL('/hoho', request.url), 302);
  }

  if (url.pathname.startsWith('/fifa')) {
    return Response.redirect(`/hoho?param=//!"¤%&()=?`);
  }

  if (url.pathname.startsWith('/todo')) {
    return NextResponse.redirect(
      new URL('/hoho?param=//()"!SAøæå', request.url)
    );
  }
  if (request.nextUrl.pathname === '/nope') {
    const url = new URL('/notFound', request.url);
    return NextResponse.rewrite(url.toString(), {
      status: 214,
    });
  }
  if (url.pathname.startsWith('/self-redirect')) {
    return new Response(null, {
      status: 302,
      headers: {
        location: '/hoho',
      },
    });
  }

  return NextResponse.next();
}
