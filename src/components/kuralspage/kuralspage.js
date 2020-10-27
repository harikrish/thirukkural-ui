import React from 'react'

import Kural from '../kural/kural';

const api = require('thirukkural-js');
const { thirukkuralAPI } = api;
const all = thirukkuralAPI.getAll()
const kurals = thirukkuralAPI.getKurals(all)

export default function KuralsPage({startKno, endKno}) {
    let kuralNos = []
    for (let i = (startKno - 1); i <= (endKno -1); i++ ) {
        kuralNos.push(i)
    }
    const kitems = kuralNos.map((kno, index) => {
        const kuralDetails = thirukkuralAPI.getKuralDetails(kurals, kno)
        const kural = thirukkuralAPI.getKural(kuralDetails)
        const kuralLine1 = thirukkuralAPI.getKuralLine1(kuralDetails)
        const kuralLine2 = thirukkuralAPI.getKuralLine2(kuralDetails)
        const explanation = thirukkuralAPI.getKuralExplanation(kuralDetails)
        const kuralNumber = thirukkuralAPI.getKuralNumber(kuralDetails)
        return <Kural kural={kural} key={index} 
            kuralLine1={kuralLine1} kuralLine2={kuralLine2} 
            explanation={explanation} kuralNumber={kuralNumber}
            />
    })
    return (
        <div>
            {kitems}
        </div>
    )
}