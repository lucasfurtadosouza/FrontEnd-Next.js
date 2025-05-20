export default function Banner() {
    return (
        <div className="md:grid grid-cols-2 items-center">
            <div>
                <img src="/img/banner.svg" alt="" />
            </div>
            <div className="text-center text-white">
                <h3>UTFTEC</h3>
                <h4>A MELHOR ESCOLA DE INFORMÁTICA</h4>
                <button
                    className="px-4 py-2 mt-4 bg-white rounded-md text-black hover:bg-green-400"
                >
                    Informações
                </button>
            </div>
        </div>
    )
}