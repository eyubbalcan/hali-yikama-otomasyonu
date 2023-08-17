import Table from "./Table";

const users = [
  {
    name: "Ali",
    surname: "Veli",
    numara: "455",
    date: "05.05.1999",
  },
  {
    name: "Berkan",
    surname: "Ök",
    numara: "799",
    date: "04.08.2005",
  },
  {
    name: "Yumak",
    surname: "Üz",
    numara: "123",
    date: "07.09.2007",
  },
];

function Servis() {
  return (
    <div className="p-4">
      <Table
        head={["Ad-Soyad", "Numara", "Tarih"]}
        body={users.map((user) => [user.name, user.numara, user.date])}
      />
    </div>
  );
}

export default Servis;
