import searchIcon from '../../assets/search.svg';

interface SearchBarProps {}

export default function SearchBar({}: SearchBarProps) {
  return (
    <div className="wrapper">
      <input type="text" name="" id="" placeholder="pokemon" />
      <button>
        <img src={searchIcon} alt="pesquisa" width={16} height={16} />
      </button>
    </div>
  );
}
