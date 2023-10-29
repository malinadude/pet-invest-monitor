import { useDateFormat } from '@vueuse/core'

import type { IBriefcase } from '@/entities/Briefcase'
import type { ITableBodyElement } from '@/shared/ui'
import type { TTableAction } from '@/shared/ui'

export default function mapBriefcaseTableBody(
  briefcases: IBriefcase[]
): ITableBodyElement<string | TTableAction[]>[][] {
  return briefcases.map((briefcase) => {
    return [
      {
        code: 'name',
        content: `
        <div style="display: flex; align-items: center">
          <img src="${briefcase.broker.icon}" style="width: 35px; height: 35px; margin-right: 7px" alt=""/> ${briefcase.name}
        </div>
        `
      },
      {
        code: 'createdAt',
        content: useDateFormat(briefcase.createdAt, 'DD.MM.YY HH:mm').value
      },
      {
        code: 'actions',
        elementId: briefcase.id,
        content: ['edit', 'delete'],
        align: 'right'
      }
    ]
  })
}
