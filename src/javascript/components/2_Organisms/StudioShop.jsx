import React, { Component } from 'react'

import StudioShopBlock from '../1_Molecules/StudioShopBlock.jsx'
import UnitBlock from '../1_Molecules/UnitBlock.jsx'

export default class StudioShop extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const update = this.props.update
    const hiring = this.props.hiringUnit
    const updates = this.props.updates
    const units = this.props.units

    return (
      <div className="StudioShop">
        <div className="UnitShop">
          <UnitBlock id={0} title="ученик" unit={units[0]} onPress={hiring} />
          <UnitBlock id={1} title="диллер" unit={units[1]} onPress={hiring} />
        </div>
        <div className="UpdatesShop">
          <StudioShopBlock
            id={0}
            title="Материалы"
            level={updates[0].level}
            cost={updates[0].cost}
            onPress={update}
          />
          <StudioShopBlock
            id={1}
            title="Помещение"
            level={updates[1].level}
            cost={updates[1].cost}
            onPress={update}
          />
          <StudioShopBlock
            id={2}
            title="Освещение"
            level={updates[2].level}
            cost={updates[2].cost}
            onPress={update}
          />
        </div>
      </div>
    )
  }
}