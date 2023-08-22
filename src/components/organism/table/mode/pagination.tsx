import Select from "@/components/molecule/select";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ReactNode, useCallback, useState } from "react";

interface ITablePagination<T> {
  children: (_options: { data: T[] }) => ReactNode;
  data: T[];
  itemsPerPage?: number;
}

const possibleItemsPerPage = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const TablePagination = <T extends Record<string, number | string>>({
  children,
  data,
  itemsPerPage = 30,
}: ITablePagination<T>) => {
  const dataLength = useCallback(() => {
    return data.length;
  }, [data]);

  const [page, changePage] = useState(1);
  const [currentItemsPerPage, changeCurrentItemsPerPage] =
    useState(itemsPerPage);

  const dataToRender = useCallback(() => {
    return data.slice(
      (page - 1) * currentItemsPerPage,
      page * currentItemsPerPage,
    );
  }, [data, page, currentItemsPerPage]);

  return (
    <div className="table-container pagination">
      <div className="table-content custom-scroll">
        {children({ data: dataToRender() })}
      </div>
      <footer className="table-footer">
        <button
          className="btn btn-icon btn-square btn-sm btn-ring-info"
          title="First Page"
          disabled={page === 1}
          onClick={() => changePage(1)}
        >
          <Icon hFlip={true} icon="ic:round-fast-forward" />
        </button>
        <button
          className="btn btn-icon btn-square btn-sm btn-ring-info"
          title="Previous Page"
          disabled={page === 1}
          onClick={() => changePage((p) => p - 1)}
        >
          <Icon hFlip={true} icon="ic:round-skip-next" />
        </button>
        <span>
          Page <span className="page">{page}</span> of{" "}
          <span className="page">
            {Math.ceil(dataLength() / currentItemsPerPage)}
          </span>
        </span>
        <Select
          items={possibleItemsPerPage}
          currentSelected={itemsPerPage}
          labelExtractor={(item) => `Per page ${item}`}
          showQty={3}
          onChange={(_, perPage) => {
            const possibleMaxPage = Math.ceil(dataLength() / perPage! ?? 1);

            const currentItemsRendered = page * currentItemsPerPage; // 100
            const possibleCurrentItemsToRender =
              page > possibleMaxPage
                ? possibleMaxPage * perPage!
                : page * perPage!;

            const percentage =
              possibleCurrentItemsToRender / currentItemsRendered;

            const currentPageShouldBe =
              percentage !== 1 ? Math.floor(page / percentage) : page;
            if (page > possibleMaxPage) {
              changePage(possibleMaxPage);
            } else {
              changePage(currentPageShouldBe < 1 ? 1 : currentPageShouldBe);
            }

            changeCurrentItemsPerPage(perPage!);
          }}
        />
        <button
          className="btn btn-icon btn-square btn-sm btn-ring-info"
          title="Next Page"
          disabled={Math.ceil(dataLength() / currentItemsPerPage) === page}
          onClick={() => changePage((p) => p + 1)}
        >
          <Icon icon="ic:round-skip-next" />
        </button>
        <button
          className="btn btn-icon btn-square btn-sm btn-ring-info"
          disabled={Math.ceil(dataLength() / currentItemsPerPage) === page}
          onClick={() =>
            changePage(Math.ceil(dataLength() / currentItemsPerPage))
          }
          title="Last Page"
        >
          <Icon icon="ic:round-fast-forward" />
        </button>
        <span>{dataLength()} items</span>
      </footer>
    </div>
  );
};

export default TablePagination;
