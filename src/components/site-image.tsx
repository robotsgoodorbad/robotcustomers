type SiteImageProps = {
  aspectClassName: string;
  label?: string;
};

export default function SiteImage({ aspectClassName, label }: SiteImageProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-slate-200 bg-slate-100 ${aspectClassName}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300" />
      {label ? (
        <div className="absolute inset-0 flex items-end p-3">
          <span className="rounded bg-white/85 px-2 py-1 text-xs text-slate-700">
            {label}
          </span>
        </div>
      ) : null}
    </div>
  );
}
