import MainLayout from "../layouts/MainLayout";
import MetricCard from "../components/MetricCard";
import useDashboard from "../hooks/useDashboard";

export default function Dashboard(){

    const {

        health,
        state

    } = useDashboard();

    return(

        <MainLayout>

            <div className="metrics">

                <MetricCard
                    title="Status"
                    value={health?.status ?? "Loading"}
                />

                <MetricCard
                    title="Cycle"
                    value={state?.cycle ?? "-"}
                />

                <MetricCard
                    title="Decision"
                    value={state?.decision ?? "-"}
                />

                <MetricCard
                    title="Confidence"
                    value={state?.confidence ?? "-"}
                />

            </div>

            <div className="panel">

                <h2>Bot State</h2>

                <pre>

{JSON.stringify(state,null,2)}

                </pre>

            </div>

        </MainLayout>

    );

}
