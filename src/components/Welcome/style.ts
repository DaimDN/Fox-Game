import styled from 'styled-components'

export const Sheet : any = styled.main.attrs({
  className: "h-screen w-full flex flex-col items-center justify-center  font-sans",
})``

export const Wrapper : any = styled.main.attrs({
  className: "h-screen w-full absolute flex items-center justify-center bg-modal",
})``


export const InnerWrapper : any = styled.main.attrs({
  className: "border-2 border-blue-600 bg-white rounded shadow py-8 px-14 m-4 h-4/5 mx-7 text-center",
})``

export const CenterFlex : any = styled.main.attrs({
  className: "flex justify-center",
})``

export const ButtonFav : any = styled.main.attrs({
  className: "flex-no-shrink cursor-pointer mb-4/5 text-black b border-2 border-yellow-400 mt-64 py-3 px-14 rounded rounded-xl bg-teal hover:bg-teal-dark",
})``

export const ButtonSelected : any = styled.main.attrs({
  className: "flex-no-shrink cursor-pointer mb-4/5 text-black b border-2 border-yellow-400 mt-64 py-3 bg-yellow-400 px-14 rounded rounded-xl bg-teal hover:bg-teal-dark",
})``

export const ScoreBoardButton : any = styled.main.attrs({
  className: "flex-no-shrink text-white mx-4 cursor-pointer text-black w-5/6 b border-2 border-yellow-500 mt-64 py-3 bg-yellow-400  rounded rounded-xl ",
})``


export const Margin4 : any = styled.main.attrs({
  className: "mb-4",
})``

export const Margin8 : any = styled.main.attrs({
  className: "mb-8",
})``

export const Flex : any = styled.main.attrs({
  className: "flex flex-row pt-6",
})``

export const GameFlex : any = styled.main.attrs({
  className: "flex flex-row pt-6 -mt-4",
})``

export const ScorePanel : any = styled.main.attrs({
  className: "w-1/3 text-left font-bold text-gray-800 ",
})``

export const TimerPanel : any = styled.main.attrs({
  className: "w-2/3 font-bold text-gray-800 text-right",
})``

export const ImageSection : any = styled.main.attrs({
  className: "relative cursor-pointer group w-28 h-28 overflow-hidden bg-black m-auto",
})``

export const DisplayStand : any = styled.main.attrs({
  className: "grid grid-cols-3",
})``

export const ScoreBoardFlex : any = styled.main.attrs({
  className: "flex flex-row -mt-52 relative py-4",
})``



export const Heading : any = styled.main.attrs({
  className: "text-gray-800 text-4xl font-small",
})``

export const HeadingContent : any = styled.main.attrs({
  className: "text-gray-800  text-2xl text-center mx-auto ",
})`
`
export const Heading2 : any = styled.main.attrs({
  className: "text-gray-800 text-2xl font-small",
})`
font-size: 18px;
`

export const Stand : any = styled.div`
background-image : url('/bg.jpg');
background-size: cover;
`
