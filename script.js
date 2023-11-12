import React from "https://esm.sh/react@18";
import ReactDOM from "https://esm.sh/react-dom@18";
tailwind.config = {
  theme: {
    extend: {
      colors: {
        brandPrimary: "#365dea",
        brandPrimaryMuted: "#d7dffb",
        brandText: "#25292e",
        brandGray: "#6e757c",
        brandBorder: "#e5e7ea",
      },
    }
  }
}


const data = [
  {
    key: 1,
    title: "The Phantom of the Opera",
    image: "https://res.cloudinary.com/ds574fco0/image/upload/v1698996272/codepen/subscription-flow-item1_vifglv.jpg",
    date: "Fri, Sep 15 - Sat, Sep 23",
    place: "Majestic Theatre",
    price: "$100-200 per ticket",
    selected: true,
    options: [
      { key: 1, title: "Thu, Feb 9 - 7pm", ticked: true },
      { key: 2, title: "Fri, Feb 10 - 7pm", ticked: false },
      { key: 3, title: "Sat, Feb 11 - 7pm", ticked: false },
      { key: 4, title: "Sun, Feb 10 - 7pm", ticked: false },
    ],
  },
  {
    key: 2,
    title: "Bad Cinderella on Broadway",
    image: "https://res.cloudinary.com/ds574fco0/image/upload/v1698996271/codepen/subscription-flow-item2_yqrsqx.jpg",
    date: "Fri, Oct 20 - Sat, Oct 28",
    place: "Imperial Theatre",
    price: "$100-200 per ticket",
    selected: false,
    options: [
      { key: 1, title: "Thu, Feb 9 - 7pm", ticked: false },
      { key: 2, title: "Fri, Feb 10 - 7pm", ticked: false },
      { key: 3, title: "Sat, Feb 11 - 7pm", ticked: false },
      { key: 4, title: "Sun, Feb 10 - 7pm", ticked: false },
    ],
  },
];

function Header() {
  return (
    <nav className="border-b border-brandBorder fixed inset-x-0 top-0 h-14 px-6 flex items-center justify-between">
      <div className="inline-flex items-center space-x-3">
        <div className="w-8 h-8 border rounded-full grid place-items-center">
          <ArrowLeftIcon className="w-4 h-4" strokeWidth={2} />
        </div>
        <div
          className="w-9 h-9 rounded-md bg-center bg-cover"
          style={{ backgroundImage: 'url("https://res.cloudinary.com/ds574fco0/image/upload/v1698996270/codepen/subscription-flow-icon_h1lcbp.png")' }}
        />
        <div className="font-semibold"> NYC Muses </div>
      </div>
      <button className="rounded-md py-1.5 px-4 bg-brandPrimary text-sm text-white">
        Login/Create Account
      </button>
    </nav>
  );
}

function Sidebar() {
  return (
    <aside className="w-96 border-l border-brandBorder shrink-0 bg-[#f9fafb]">
      <div className="h-12 shrink-0 border-b border-brandBorder px-6 items-center flex font-bold">
        Your Items
      </div>
      <div className="px-6 text-sm">
        <h3 className="mt-4 font-semibold">2 Pack Classic Series x 2</h3>
        <div className="flex  py-4">
          <div
            className="w-16 h-16 rounded-md bg-center bg-cover shrink-0"
            style={{ backgroundImage: 'url("https://res.cloudinary.com/ds574fco0/image/upload/v1698996272/codepen/subscription-flow-item1_vifglv.jpg")' }}
          ></div>
          <div className="ml-4 shrink-0">
            <div className="font-semibold"> The Phantom of the Opera </div>
            <div className="text-[#6e757c]"> Thu, Feb 9 7:00 pm </div>
          </div>
          <div className="grow"> </div>
          <button className="w-5 h-5 text-brandGray">
            <BinIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="flex text-sm py-4 items-center">
          <div className="border-dashed w-16 h-16 rounded-md bg-[#e3e8fa] grid place-items-center border-2 border-[#a1b3f3] text-brandPrimary">
            <TicketIcon />
          </div>
          <div className="ml-4 font-semibold text-[#6e757c]">Select Show 2</div>
        </div>
      </div>
      <div className="border-t border-b py-4 border-brandBorder">
        <div className="flex items-center px-6 space-x-3">
          <input
            className="grow rounded-md h-9 border border-[#e6e8eb] shadow-sm text-sm pl-2"
            placeholder="Discount Code"
          />
          <button className="w-9 h-9 rounded-md bg-brandPrimaryMuted text-white shrink-0 grid place-items-center">
            <ArrowRightIcon className="w-4 h-4" strokeWidth={3} />
          </button>
        </div>
      </div>
      <div className="px-6 text-sm mt-6">
        <div className="flex items-center justify-between py-2">
          <div> Subtotal </div>
          <div> $297.00 </div>
        </div>
        <div className="flex items-center justify-between py-2">
          <div className="inline-flex items-center">
            <div> Fees </div>
            <button className="ml-1 text-[#7f868c]">
              <InformationCircleIcon className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
          <div> $5.00 </div>
        </div>
        <div className="flex items-center justify-between border-t py-2 border-brandBorder font-semibold">
          <div className=""> Total </div>
          <div> $302.00 </div>
        </div>
      </div>
    </aside>
  );
}

function Main() {
  return (
    <main className="grow flex flex-col text-sm">
      <div className="h-12 shrink-0 border-b flex items-center px-6 border-brandBorder">
        <div className="font-semibold"> 2 Pack Classic Series </div>
        <div className="grow"> </div>
        <div className="inline-flex items-center rounded-full h-8 bg-[#ebeffd] pl-2 pr-3">
          <div className="w-6 h-6 bg-brandPrimary text-white rounded-full grid place-items-center">
            1
          </div>
          <div className="ml-2 text-brandPrimary font-semibold">
            Select Shows
          </div>
        </div>
        <div className="h-1 w-10 bg-brandBorder rounded-full mx-2"> </div>
        <div className="inline-flex items-center rounded-full h-7 pl-2 pr-4">
          <div className="w-6 h-6 bg-brandBorder rounded-full grid place-items-center text-white">
            2
          </div>
          <div className="ml-2 text-[#d3d4d5]"> Choose Seats </div>
        </div>
        <div className="h-1 w-10 bg-brandBorder rounded-full mx-2"> </div>
        <div className="inline-flex items-center rounded-full h-7 pl-2 pr-4">
          <div className="w-6 h-6 bg-brandBorder rounded-full grid place-items-center text-white">
            3
          </div>
          <div className="ml-2 text-[#d3d4d5]"> Checkout </div>
        </div>
      </div>
      <div className="grow overflow-x-hidden overflow-y-auto">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="mt-4 text-base font-semibold">Select 2 shows</h2>
          {data.map((i) => (
            <SelectionCard key={i.key} item={i} />
          ))}
        </div>
      </div>
      <div className="h-12 shrink-0 border-t border-brandBorder flex items-center justify-end px-4">
        <div className="text-[#6e757c]"> Please select 2 shows first </div>
        <button className="ml-4 rounded-md py-1.5 px-8 bg-brandPrimaryMuted text-white">
          Next
        </button>
      </div>
    </main>
  );
}


function SelectionCard({ item }) {
  return (
    <div className="py-3">
      <div
        className={`border rounded-md${
          item.selected
            ? " border-brandPrimary border-2"
            : " border-brandBorder"
        }`}
      >
        <div className="flex px-6 pt-6 pb-1">
          <div className="grow text-sm">
            <div className="font-semibold"> {item.title} </div>
            <div className="py-0.5 flex items-center text-[#6e757c]">
              <CalendarIcon className="w-5 h-5" />
              <div className="ml-2"> {item.date} </div>
            </div>
            <div className="py-0.5 flex items-center text-[#6e757c]">
              <PlaceIcon className="w-5 h-5" />
              <div className="ml-2"> {item.place} </div>
            </div>

            <div className="mt-1 font-semibold"> {item.price} </div>
          </div>
          <div
            className="w-20 h-20 rounded-md bg-center bg-cover"
            style={{ backgroundImage: `url("${item.image}")` }}
          />
        </div>

        <div className="flex flex-wrap p-2">
          {item.options.map((option) => (
            <div className="w-1/2 p-2" key={option.key}>
              <div
                className={`${
                  option.ticked
                    ? "border-2 border-brandPrimary"
                    : "border border-brandBorder"
                } rounded-md text-sm px-2 py-2 text-center relative shadow-sm`}
              >
                {option.ticked ? (
                  <div className="absolute w-12 inset-y-0 left-0 grid place-items-center">
                    <div className="w-5 h-5 rounded-full bg-brandPrimary text-white grid place-items-center">
                      <TickIcon className="w-3.5 h-3.5" strokeWidth={2.5} />
                    </div>
                  </div>
                ) : null}
                {option.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



function ArrowLeftIcon({
  className = "w-6 h-6",
  strokeWidth = 1.5,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
      />
    </svg>
  );
}
function ArrowRightIcon({
  className = "w-6 h-6",
  strokeWidth = 1.5,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </svg>
  );
}

function BinIcon({ className = "w-6 h-6", strokeWidth = 1.5 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
      />
    </svg>
  );
}

function TicketIcon({ className = "w-6 h-6", strokeWidth = 1.5 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
      />
    </svg>
  );
}

function CalendarIcon({ className = "w-6 h-6", strokeWidth = 1.5 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
      />
    </svg>
  );
}

function PlaceIcon({ className = "w-6 h-6", strokeWidth = 1.5 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </svg>
  );
}

function TickIcon({ className = "w-6 h-6", strokeWidth = 1.5 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

function InformationCircleIcon({
  className = "w-6 h-6",
  strokeWidth = 1.5,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </svg>
  );
}


function App() {
  return (
    <div className="text-brandText">
      <Header />
      <div className="pt-14 flex h-screen overflow-hidden">
        <Main />
        <Sidebar />
      </div>
    </div>
  );
}

ReactDOM.render(<App />,
document.getElementById("root"))
