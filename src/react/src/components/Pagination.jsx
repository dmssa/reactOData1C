import React from 'react'
import { Pagination } from 'semantic-ui-react'

const Pages = page => {
    const {
      activePage,
      boundaryRange,
      siblingRange,
      showEllipsis,
      showFirstAndLastNav,
      showPreviousAndNextNav,
      totalPages,
      isReady,
      isLoading,
      config,
      itemsPerPage,
      searchQuery,
    } = page;
    //onPageChange={page.handlePaginationChange.bind(this)}
    
    if(isReady && totalPages>1)
      return (
          <Pagination
            activePage={activePage}
            boundaryRange={boundaryRange}
            onPageChange={page.handlePaginationChange.bind(this)}
            size='mini'
            siblingRange={siblingRange}
            totalPages={totalPages}
            // Heads up! All items are powered by shorthands, if you want to hide one of them, just pass `null` as value
            ellipsisItem={showEllipsis ? undefined : null}
            firstItem={showFirstAndLastNav ? undefined : null}
            lastItem={showFirstAndLastNav ? undefined : null}
            prevItem={showPreviousAndNextNav ? undefined : null}
            nextItem={showPreviousAndNextNav ? undefined : null}
          />
      )
    if(!isReady && !isLoading) page.load(config, itemsPerPage, searchQuery);
    return <></>;
 // }
}

export default Pages;