import PaginationFilter from "./filter/components/PaginationFilter"
import SortFilter from "./filter/components/SortFilter"
import Filter from "./filter/Filter"
import Hotels from "./hotels/Hotels"

const SearchPage = () => {
    return (
        <div className="container flex gap-4 mt-6 mb-12">
            <Filter />
            <section className="flex-1 space-y-6">
                <div className="flex items-center justify-between">
                    <h1>Jaipur: 828 Properties Found</h1>
                    <SortFilter />
                </div>
                <Hotels />
                <PaginationFilter />
            </section>
        </div>
    )
}

export default SearchPage