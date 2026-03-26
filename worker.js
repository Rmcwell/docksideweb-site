export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 1. WWW to Non-WWW Redirect
    // If the host starts with 'www.', redirect to the root domain
    if (url.hostname.startsWith('www.')) {
      const newUrl = new URL(request.url);
      newUrl.hostname = url.hostname.replace(/^www\./, '');
      return Response.redirect(newUrl.toString(), 301);
    }

    const pathname = url.pathname;

    // 2. Trailing Slash Logic (Your existing code)
    const isFile = pathname.includes('.');
    if (!isFile && !pathname.endsWith('/') && pathname !== '/') {
      const newUrl = new URL(request.url);
      newUrl.pathname = pathname + '/';
      return Response.redirect(newUrl.toString(), 301);
    }

    // 3. Serve Assets
    return env.ASSETS.fetch(request);
  },
};