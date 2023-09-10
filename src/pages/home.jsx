
import ListViewSingle from "../components/listViewSingle"

const Home=({t})=>{
  

    return (
        <div>
 
        <ListViewSingle t={t} book={"first_book"} />
        <ListViewSingle t={t} book={"second_book"} />
        <ListViewSingle t={t} book={"third_book"} />
        <ListViewSingle t={t} book={"fourth_book"} />



        </div>
    )
}

export default Home