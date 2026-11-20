import { EventCard } from "@/components/events/EventCard";
import { Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearSaved } from "@/store/slices/savedSlice";
import { toast } from "sonner";

export default function SavedPage() {
    const saves = useSelector((state) => state.saved.items)
    const dispatch = useDispatch();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 pb-24">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EBE8DF] pb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-[#111] tracking-tight">
            Saved Collections
          </h1>
          <p className="text-sm text-stone-600">
            Bookmarked conclaves, summits, and performances to revisit anytime.
          </p>
        </div>

        {saves.length > 0 && <Button
            size="sm"
            variant="outline"
            className="text-stone-500 hover:text-rose-400"
            onClick={() =>{
                if(window.confirm("you sure you wanna clear your entire saved list?")){
                    dispatch(clearSaved());
                    toast.info('Removed Everything from your collection')
                };
            }}
            // className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-lg text-xs font-medium px-3 py-1.5 border border-[#CCC8BA] bg-transparent hover:bg-[#F2F1EC] text-stone-500 hover:text-rose-400"
        >
            Clear All
        </Button>}
      </div>
        {
            saves.length === 0 ? <div className="bg-white rounded-3xl border border-[#EBE8DF] p-12 text-center max-w-lg mx-auto space-y-4 shadow-subtle">
          <div className="w-14 h-14 bg-orange-50 text-[#E65100] rounded-2xl flex items-center justify-center mx-auto border border-orange-100">
            <Bookmark className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-base text-stone-900">
              Your collection is empty
            </h3>
            <p className="text-xs text-stone-500">
              Bookmark events you find intriguing so you can quickly access or
              register later.
            </p>
          </div>
          <Link to="/explore">
            <Button variant="primary" size="sm">
              Discover Gatherings
            </Button>
          </Link>
        </div> : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {
                     saves.map((e) => <EventCard key={e.id || e._id} event={e}/>)
                }
                </div>
            )
        }
    </div>
  );
}