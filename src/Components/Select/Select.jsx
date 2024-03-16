import './Select.scss'

function Select() {
    return (
        <>
            <section className='select'>
                <div className="container">
                    <h2 className='select__heading'>Select project,</h2>
                    <del className='select__del'>check dependencies, checkout branch, view readme.txt, install tools, run build, run test,</del>
                    <h2 className='select__heading1'>start coding.</h2>
                </div>
            </section>
        </>
    )
}

export default Select;