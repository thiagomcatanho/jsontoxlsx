const data = [
  {
    matricula: "0002",
    nome: "Thiago",
    cpf: "000.111.222-44",
    empresa: "Bisaweb",
  },
  {
    matricula: "0001",
    nome: "Gilberto",
    cpf: "333.222.111-22",
    empresa: "Bisaweb",
  },
  {
    matricula: "0003",
    nome: "Julio",
    cpf: "222.111.000-33",
    empresa: "Bisaweb",
  },
];

const EXCEL_TYPE =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const EXCEL_EXTENSION = ".xlsx";

function downloadAsExcel() {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = {
    Sheets: {
      data: worksheet,
    },
    SheetNames: ["data"],
  };

  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });

  saveExcel(excelBuffer, "meuArquivo");
}

function saveExcel(buffer, nomeArquivo) {
  const data = new Blob([buffer], { type: EXCEL_TYPE });
  saveAs(
    data,
    nomeArquivo + "_" + new Date().getTime() + EXCEL_EXTENSION
  );
}
