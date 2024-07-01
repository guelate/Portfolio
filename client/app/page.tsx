import DailyStack from "./components/DailyStack";
import HomeHeader from "./components/HomeHeader";
import Introduction from "./components/Introduction";
import RecentProjects from "./components/RecentProjects";
import VeepeeExperiment from "./components/VeepeeExperiment";

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <Introduction/>
      <VeepeeExperiment />
      <RecentProjects /> 
      <DailyStack />
    </div>
  );
}
