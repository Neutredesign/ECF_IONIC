import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { IonButton } from "@ionic/react";
import './style/StatsDisplay.css';

const StatsDisplay: React.FC = () => {
  const [stats, setStats] = useState<Stats | null>(null);
  const { scrutinId } = useParams<{ scrutinId: string }>();

  interface Stats {
    total: number;
    voted: number;
  }

  useEffect(() => {
    const loadStats = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/v1/scrutins/${scrutinId}/members/stats`);
        if (!response.ok) throw new Error('Erreur réseau');
        const dataStats = await response.json();
        setStats(dataStats.data);
      } catch (error) {
        console.error('Échec du chargement des stats :', error);
      }
    };
    loadStats();
  }, [scrutinId]);

  return (
    <div>
      <h1>Statistiques des votes</h1>

      <table className="stats-table">
        <thead>
          <tr>
            <th>Total membres</th>
            <th>Ont voté</th>
          </tr>
        </thead>
        <tbody>
          {stats && (
            <tr>
              <td>{stats.total}</td>
              <td>{stats.voted}</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="chart-wrapper">
        <BarChart
          width={500}
          height={300}
          data={[
            { name: 'Total', value: stats ? stats.total : 0 },
            { name: 'À voté', value: stats ? stats.voted : 0 }
          ]}
        >
          <Bar dataKey="value" fill="#f8c6dc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </BarChart>
      </div>

      <div className="back-btn">
        <IonButton className="pink-button" routerLink="/home">Retour</IonButton>
      </div>
    </div>
  );
};

export default StatsDisplay;
