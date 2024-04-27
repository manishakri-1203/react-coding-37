// Write your code here
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {vaccinationCoverageDetails} = props

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="vaccination-coverage-container">
      <h1 className="vaccination-coverage-heading">Vaccination Coverage</h1>
      <BarChart
        width={1000}
        height={300}
        data={vaccinationCoverageDetails}
        margin={{top: 5}}
      >
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: '#6c757d',
            strokeWidth: 1,
            fontSize: 15,
            fontFamily: 'Roboto',
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: '#6c757d',
            strokeWidth: 0,
            fontSize: 15,
            fontFamily: 'Roboto',
          }}
        />
        <Legend
          wraperStyle={{
            paddingTop: 20,
            fontSize: 12,
            textAlign: 'center',
            fontFamily: 'Roboto',
          }}
        />
        <Bar
          name="Dose 1"
          dataKey="dose1"
          fill="#5a8dee"
          barsize="20%"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          name="Dose 2"
          dataKey="dose2"
          fill="#f54394"
          barsize="20%"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
