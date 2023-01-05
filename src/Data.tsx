import React from 'react'
import DataGrid from 'react-data-grid'

const columns: any[] = [
  { key: 'name', name: 'Name', editable: true },
  { key: 'race', name: 'Race', editable: true },
  {
    key: 'powerLevel',
    name: 'Power Level',
    editable: true,
  },
  { key: 'favoriteTechnique', name: 'Favorite Technique', editable: true },
]

const rows: { [key: string]: any }[] = [
  {
    name: 'Goku',
    race: 'Saiyan',
    powerLevel: 9001,
    favoriteTechnique: 'Kamehameha',
  },
  {
    name: 'Vegeta',
    race: 'Saiyan',
    powerLevel: 8500,
    favoriteTechnique: 'Galick Gun',
  },
  {
    name: 'Gohan',
    race: 'Human/Saiyan Hybrid',
    powerLevel: 7500,
    favoriteTechnique: 'Masenko',
  },
]

const DragonBallZ = () => {
  const [gridRows, setGridRows] = React.useState<any>(rows)

  const handleRowUpdated = (row: any) => {
    const rows = [...gridRows]
    const index = rows.indexOf(row)
    rows[index] = { ...row }
    setGridRows(rows)
  }
  console.log(gridRows.length)
  return (
    <DataGrid
      columns={columns}
      rowGetter={(i) => gridRows[i]}
      rowsCount={gridRows.length}
      onRowUpdated={handleRowUpdated}
      enableCellSelect={true}
      minHeight={300}
    />
  )
}

export default DragonBallZ
