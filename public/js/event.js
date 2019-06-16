function event_studio_download (platform)
{
	if (!gtag) return;
	gtag ('event', 'download',
	{
		event_category: 'studio',
		event_label: platform,
		platform: platform	
	});
}

function event_studio_github ()
{
	if (!gtag) return;
	gtag ('event', 'github',
	{
		event_category: 'studio',
	});
}

function event_more_info (object, tag)
{
	if (!gtag) return;
	gtag ('event', 'more_info',
	{
		event_category: object,
		event_label: tag
	});
}

function event_cloud_download (action)
{
	if (!gtag) return;
	gtag ('event', 'download',
	{
		event_category: 'cloud',
		event_label: action	
	});
}

function event_docs_youtube ()
{
	if (!gtag) return;
	gtag ('event', 'youtube', {
		event_category: 'docs'
	});
}

function event_docs_wiki ()
{
	if (!gtag) return;
	gtag ('event', 'wiki', {
		event_category: 'docs'
	});
}

function event_docs_faq ()
{
	if (!gtag) return;
	gtag ('event', 'faq', {
		event_category: 'docs'
	});
}

function event_docs_book_download (book)
{
	if (!gtag) return;
	gtag ('event', 'download', {
		event_category: 'book',
		event_label: book
	});
}

function event_docs_book_link (book)
{
	if (!gtag) return;
	gtag ('event', 'link', {
		event_category: 'book',
		event_label: book
	});
}

function event_contact (platform)
{
	if (!gtag) return;
	gtag ('event', 'contact', {
		event_category: 'social',
		event_label: platform
	});
}

function event_footer (platform)
{
	if (!gtag) return;
	gtag ('event', 'footer', {
		event_category: 'social',
		event_label: platform
	});
}