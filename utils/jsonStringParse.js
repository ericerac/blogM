

const parString = (x,pD)=>{
    console.log("FILTER ID",x,"FILTER DATA",pD);
    const stringi = JSON.stringify(pD);
            //  console.log("STRINGiFY ---->", stringi );
            const parsi = JSON.parse(stringi);
            //  console.log("PARSI ---->", parsi );

            const cardUp = parsi.filter((i) => i._id == x);

            console.log("cardUp ----->", cardUp);
            return cardUp
}
export default parString