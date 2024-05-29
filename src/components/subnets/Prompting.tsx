import dayjs from 'dayjs'

import type { ISubnet } from '@/types'

export const Prompting = ({ subnet }: { subnet: ISubnet }) => {
  return (
    <div>
      <div className="text-[#ADACE3] text-7.5 font-400 lh-9 font-[Orbitron]">{subnet.name ?? '??'}</div>
      <div className="mt-3 space-y-3">
        <div className="flex items-center">
          <span className="w-30 text-brand">Subnet info</span>
          <span className="text-[#6B68FF] text-4 font-400">{subnet.githubUrl}</span>
        </div>
        <div className="flex items-center">
          <span className="w-30 text-brand">Registered on</span>
          <span className="text-primary text-4 font-400">
            {dayjs(subnet.registeredAt).format('DD MMM YYYY HH:mm:ss')}
          </span>
        </div>
        <div className="flex items-center">
          <span className="w-30 text-brand">Registered to</span>
          <span className="text-#FF8023 text-4 font-400">{subnet.registeredBy}</span>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-4 gap-3">
        {[
          {
            title: 'Emissions',
            value: `${subnet.emissionPercentage.toFixed(2)}%`, // 4.89%
          },
          {
            title: 'Recycled',
            value: '??',
          },
          {
            title: 'Recycled(24h)',
            value: '??',
          },
          {
            title: 'Registration Cost',
            value: `${subnet.registerCost.toFixed(2)}`,
          },
          {
            title: 'Active Keys',
            value: `${subnet.activeKeys}/${subnet.totalKeys}`,
          },
          {
            title: 'Active Validators',
            value: `${subnet.activeValidators}/${subnet.totalValidators}`,
          },
          {
            title: 'Active Miners',
            value: `${subnet.activeMiners}/${subnet.totalMiners}`,
          },
          {
            title: 'Active Dual Miners/Validators',
            value: '2/128',
          },
        ].map((item, index) => (
          <div key={index} className="flex flex-col gap-.5">
            <span className="text-brand">{item.title}</span>
            <span className="text-primary">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
