interface ITableProps<T> {
  headers?: Record<keyof T, string>[];
  data: T[];
  dataConfig: Partial<keyof T, (_value: string) => ReactNode>
  headersConfig: Partial<keyof t, (_value: string) => ReactNode>
}

const Table = <T,>({
  headers,
  data,
  dataConfig,
  headersConfig
}: ITableProps<T>) => {
  const translation = (v: string) => v;
  return (
    <table className="table">
      <thead>
        <tr>
          {
            headers && (
              headers.map((column, columnIndex) => {
                return <th key={columnIndex}>{column}</th>;
              })
            )
          }
          {
            headers === undefined && (
              Object.keys(data[0]).map((column, columnIndex) => {
                // if (Object.hasOwnProperty.call(dataConfig, column)) {
                //   return dataConfig[column];
                // }

                return <th key={columnIndex}>{translation(column)}</th>
              })
            )
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((row, rowIndex) => {
            return (
              <tr key={rowIndex}>
                {
                  Object.entries(row).map((item, itemIndex) => {
                    return (
                      <th key={itemIndex}>{item}</th>
                    )
                  })
                }
              </tr>
            );
          })
        }
      </tbody>
    </table>
  )
}

export default Table;
