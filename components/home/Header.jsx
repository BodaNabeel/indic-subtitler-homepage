import SecondaryBtn from "../SecondaryBtn";

export default function Header() {
  return (
    <header className="flex justify-between pt-5 items-center">
      <h1 className="text-3xl font-medium text-[#333333]">Indic Subtitler</h1>
      <SecondaryBtn />
    </header>
  );
}