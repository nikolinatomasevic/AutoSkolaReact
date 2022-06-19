function Polaznici(props){

    const polaznici = props.polaznici;

    return (
        <div>
            
            <div className="tablepolaznici">

                <table className="table table-bordered table-hover table-primary border border-3 border-dark">
                    <thead className="table-dark border border-3 border-dark">
                        <tr>
                            <th>ID</th>
                            <th>Ime</th>
                            <th>Prezime</th>
                            <th>Kategorija</th>
                            <th>Teorija</th>
                            <th>Instruktor</th>
                        </tr>
                    </thead>

                    <tbody>
                    {polaznici.map(p => {
                            return (
                                <tr key={p.ID}>
                                    <td>{p.ID}</td>
                                    <td>{p.Ime}</td>
                                    <td>{p.Prezime}</td>
                                    <td>{p.Kategorija}</td>
                                    <td>{p.Teorija}</td>
                                    <td>{p.Instruktor.Ime + " " + p.Instruktor.Prezime}</td>
                                </tr>
                            );
                        })}
                    </tbody>

                </table>

            </div>

        </div>
    )
}

export default Polaznici;