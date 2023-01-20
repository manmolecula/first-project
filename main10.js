function costCalculations( numberOfItems, cost, kod){
    if(cost>300 && kod == 'ДАРИМ300') cost-=300;
    else if(cost<=300 && kod == 'ДАРИМ300') cost=0;
    if(numberOfItems>=10) cost*=0.95;
    if(cost>50000) cost-=(cost-50000)*0.2;
    if(cost>=20000 && kod == 'СКИДКА15') cost*=0.85;
    return cost;
}

console.log(costCalculations(10, 120000, promokod = 'ДАРИМ300'));