const SIMPSON_CHARACTERS = [
	"Homer Simpson",
	"Bart Simpson",
	"Marge Simpson",
	"Mr. Burns",
	"Lisa Simpson",
	"Apu Nahasapeemapetilon",
	"Sideshow Bob",
	"Milhouse Van Houten",
	"Ned Flanders",
]

// SIMPSON_CHARACTERS defined up here.

export default function SimpsonsCharacters() {
  return <ul>
    {
        SIMPSON_CHARACTERS.map((characterName, index)=> {
            // index will preserve the array index of each element under the hood
            // which we can eventually use to refer to a specific rendered element
            return <li key={index}>{characterName}</li>
        })
    }
  </ul>
}