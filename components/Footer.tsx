export default function Footer() {
return ( <footer
   dir="rtl"
   className="border-t border-white/[0.06] bg-[#0d0d0d]"
 > <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-8 text-sm text-white/30 sm:flex-row sm:items-center sm:justify-between"> <div className="flex items-center gap-2"> <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-xs font-black text-black">
B </span>

      <span className="font-medium text-white/50">
        B&B Studio
      </span>
    </div>

    <span>
      © {new Date().getFullYear()} تمام حقوق محفوظ است.
    </span>
  </div>
</footer>
);
}
