import ReactPaginate from 'react-paginate'
import qs from 'qs'
import { useHistory, useLocation } from "react-router-dom"
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'
import { Input } from 'reactstrap'

const TableComponent = ({ ref, data, columns, currentPage, totalPages, perPage, ...rest }) => {
    const history = useHistory()
    const location = useLocation()

    const handlePaginate = (page) => {
        const query = qs.parse(location.search, { ignoreQueryPrefix: true })
        history.push({
            pathname: location.pathname,
            search: qs.stringify({
                ...query,
                page: page?.selected || undefined
            })
        })
    }
    const handlePerPage = (per) => {
        const query = qs.parse(location.search, { ignoreQueryPrefix: true })
        history.push({
            pathname: location.pathname,
            search: qs.stringify({
                ...query,
                size: per || undefined
            })
        })
    }

    const CustomPagination = () => (
        <div className='mt-2'>
            <ReactPaginate
                previousLabel={''}
                nextLabel={''}
                forcePage={currentPage}
                onPageChange={page => handlePaginate(page)}
                pageCount={totalPages}
                breakLabel={'...'}
                pageRangeDisplayed={2}
                marginPagesDisplayed={2}
                activeClassName='active'
                pageClassName='page-item'
                breakClassName='page-item'
                nextLinkClassName='page-link'
                pageLinkClassName='page-link'
                breakLinkClassName='page-link'
                previousLinkClassName='page-link'
                nextClassName='page-item next-item'
                previousClassName='page-item prev-item'
                containerClassName={'pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1'}
            />
        </div>
    )
    return (
        <div className='react-dataTable'>
            {
                perPage ? (
                    <Input
                        style={{ width: '80px' }}
                        type='select'
                        size="sm"
                        value={perPage}
                        onChange={e => handlePerPage(e.target.value)}
                    >
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                        <option value={75}>75</option>
                        <option value={100}>100</option>
                    </Input>
                ) : null
            }

            <DataTable
                {...rest}
                noHeader
                actions={ref}
                pagination={totalPages > 0}
                data={data}
                columns={columns}
                className='react-dataTable'
                sortIcon={<ChevronDown size={10} />}
                paginationComponent={CustomPagination}
                paginationPerPage={perPage}
                paginationDefaultPage={currentPage + 1}
                paginationRowsPerPageOptions={[10, 25, 50, 100]}
            />
        </div>
    )
}

export default TableComponent
