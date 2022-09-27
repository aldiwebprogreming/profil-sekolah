import Cardjurusan from "./CardJurusan";
import Hero from "./Hero";
import jurusan1 from "../assets/bg/jurusan1.jpeg";
import jurusan2 from "../assets/bg/jaringan.jpg";
import jurusan3 from "../assets/bg/multi.jpg";
import Kegiatan from "./Kegiatan";

import kegiatan1 from "../assets/bg/kegiatan1.jpeg";
import kegiatan2 from "../assets/bg/kegiatan2.jpeg";
import kegiatan3 from "../assets/bg/kegiatan3.jpeg";


const Maincontent = () => {
    return(

        <div>
            <Hero />
            
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center my-5">
                        <h1>Jurusan Sekolah</h1>
                    </div>
                    <div className="col-sm-4">
                        <Cardjurusan image={jurusan1} jurusan="Rekasaya Perangkat Lunak"/>
                    </div>
                    <div className="col-sm-4">
                        <Cardjurusan image={jurusan2} jurusan="Teknik Komputer Jaringan"/>
                    </div>
                    <div className="col-sm-4">
                        <Cardjurusan image={jurusan3} jurusan="Multimedia"/>
                    </div>
                </div>
            </div>
            <div className="kegiatan">
            <div className="Container my-5">
                <h1 className="text-center">Kegiatan</h1>
            </div>
                 <Kegiatan kegiatan={kegiatan1}/>
                 <Kegiatan kegiatan={kegiatan2}/>
                 <Kegiatan kegiatan={kegiatan3}/>
            </div>

        </div>
    );
}
export default Maincontent;