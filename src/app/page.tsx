import { DateRangePicker } from "@/components/ui/date-range-picker"

export default function Home() {
  return (
    <main className="flex justify-center w-screen min-h-[900px] lg:min-h-none">
      <div className="p-8 w-full max-w-[800px] mx-auto">
        <h1 className="text-2xl lg:text-4xl mb-4 lg:mb-8 text-center font-bold">Date Range Picker Component</h1>
        <h2 className="md:text-lg pb-8 border-b mb-4 px-2 md:px-8">Built for <a className="text-blue-600 font-semibold underline" href="https://ui.shadcn.com/">shadcn</a> — includes multi-month views, text entry, preset ranges, responsive design and date range comparisons.</h2>
        <div className="flex grow shrink-0 basis-[370px] flex-row justify-end items-end relative z-20">
          <DateRangePicker />
        </div>
        <div className="w-full text-right text-4xl pr-8 pt-6 pb-8 md:pb-12"><span className="text-sm relative -top-1 italic opacity-50">click it</span>☝️</div>
        <div className="px-2 md:px-8">
          <p className="pb-8"><code>DateRangePicker</code> is a reusable component built with <a className="text-blue-600 font-semibold underline" href="https://ui.shadcn.com/">shadcn</a> using beautifully designed components from <a className="text-blue-600 font-semibold underline" href="https://www.radix-ui.com/">Radix UI</a> and <a className="text-blue-600 font-semibold underline" href="https://tailwindcss.com/">Tailwind CSS</a>. It provides a dropdown interface to allow users to select or enter a range of dates and includes additional options such as preset date ranges and an optional date comparison feature.</p>
          <p className="pb-8">Check out the <a className="text-blue-600 font-semibold underline" href="https://github.com/johnpolacek/date-range-picker-for-shadcn">project on Github</a> for the <a className="text-blue-600 font-semibold underline" href="https://github.com/johnpolacek/date-range-picker-for-shadcn/tree/main/src">source</a> and <a className="text-blue-600 font-semibold underline" href="https://github.com/johnpolacek/date-range-picker-for-shadcn/tree/main#readme">docs</a>.</p>
          <p className="pb-8">Built by <a className="text-blue-600 font-semibold underline" href="https://johnpolacek.com">John Polacek</a> in Chicago.</p>
          <p className="pb-8">Find me on Twitter <a className="text-blue-600 font-semibold underline" href="https://twitter.com/johnpolacek">@johnpolacek</a> or at <a className="text-blue-600 font-semibold underline" href="https://johnpolacek.com">johnpolacek.com</a>.</p>
        </div>
      </div>
    </main>
  )
}
