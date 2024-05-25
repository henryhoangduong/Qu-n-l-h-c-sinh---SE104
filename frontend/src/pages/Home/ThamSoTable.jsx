function ThamSoTable(data) {
  
    return (
        <div class="m-6 h-max w-max relative overflow-x-auto rounded-lg" style={{border: 'black solid 3px'}}>
    <table class="w-max text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-black uppercase  " style={{backgroundColor:'#B2CCFE',borderBottom:'black solid 3px'}}>
            <tr>
                <th scope="col" class="px-6 py-3">
                    Quy định
                </th>
                <th scope="col" class="px-6 py-3">
                    Giá trị
                </th>
            </tr>
        </thead>
                <tbody>
        {Object.entries(data.data).map(([key, value]) => (
  key !== 'mathamso' && (
    <tr key={key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {key}
      </th>
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {value}
      </td>
    </tr>
  )
))}
      </tbody>

        </table>
        </div>
    )
}

export default ThamSoTable;