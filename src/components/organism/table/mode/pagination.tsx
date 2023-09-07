import Select from "../../../molecule/select";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ReactNode, useCallback, useState } from "react";
import { TTableConstraints } from "..";
import { translate } from "translation-system";

interface ITablePagination<T> {
  children: (_options: { data: T[] }) => ReactNode;
  data: T[];
  itemsPerPage?: number;
}

const possibleItemsPerPage = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const TablePagination = <T extends TTableConstraints<T>>({
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
    <>
      <div className="table-content custom-scroll">
        {children({ data: dataToRender() })}
      </div>
      <footer className="table-footer">
        <button
          className="btn btn-icon btn-square btn-sm ring-info"
          title="First Page"
          disabled={page === 1}
          onClick={() => changePage(1)}
        >
          <Icon hFlip={true} icon="ic:round-fast-forward" />
        </button>
        <button
          className="btn btn-icon btn-square btn-sm ring-info"
          title="Previous Page"
          disabled={page === 1}
          onClick={() => changePage((p) => p - 1)}
        >
          <Icon hFlip={true} icon="ic:round-skip-next" />
        </button>
        <span>
          {translate('table.page')} <span className="page">{page}</span> {translate('table.of')}{" "}
          <span className="page">
            {Math.ceil(dataLength() / currentItemsPerPage)}
          </span>
        </span>
        <Select
          items={possibleItemsPerPage}
          currentSelected={itemsPerPage}
          labelExtractor={(item) => `${translate('table.per-page')} ${item}`}
          keyExtractor={(item) => item}
          showQty={3}
          position="bottom"
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
          className="btn btn-icon btn-square btn-sm ring-info"
          title="Next Page"
          disabled={Math.ceil(dataLength() / currentItemsPerPage) === page}
          onClick={() => changePage((p) => p + 1)}
        >
          <Icon icon="ic:round-skip-next" />
        </button>
        <button
          className="btn btn-icon btn-square btn-sm ring-info"
          disabled={Math.ceil(dataLength() / currentItemsPerPage) === page}
          onClick={() =>
            changePage(Math.ceil(dataLength() / currentItemsPerPage))
          }
          title="Last Page"
        >
          <Icon icon="ic:round-fast-forward" />
        </button>
        <span>
          {dataLength()}{" "}
          {translate("table.items")}
        </span>
      </footer>
    </>
  );
};

export default TablePagination;
