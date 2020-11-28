const Text = ({ text }) => (
    <p className="mb-auto ml-auto mr-auto pl-10 pr-10 z-10 shadow-sm bg-white bg-opacity-50" dangerouslySetInnerHTML={{ __html: text }} />
)

export default Text;