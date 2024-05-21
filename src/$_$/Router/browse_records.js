



export default to => {

	if (to.fullPath === '/entry') return

	const routeRecord = JSON.parse(localStorage.getItem('browse_records'))


	const [, currenBook, currentPage] = to.fullPath.split('/')
	const browseRecords = routeRecord ?? {}

	browseRecords.$lastBrowse = to.fullPath
	browseRecords[currenBook] = currentPage


	localStorage.setItem('browse_records', JSON.stringify(browseRecords))
}