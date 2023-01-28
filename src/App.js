function App() {
  return <div className=" Parent">
    <div>Header</div>
    <div className="flex">
      <div className="bg-blue-500 w-32">Sidebar</div>
      <div className="w-full bg-red-500">Main Content</div>
    </div>
  </div>;
}

export default App;
