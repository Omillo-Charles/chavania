"use client";

import React from 'react';
import { ExternalLink, CheckCircle2, Clock, XCircle, Download } from 'lucide-react';

const PAYOUT_HISTORY = [
  { id: '#PAY-9901', date: 'Oct 20, 2023', method: 'M-Pesa (0712...345)', amount: 'KES 45,000', status: 'Completed' },
  { id: '#PAY-8812', date: 'Oct 13, 2023', method: 'Equity Bank (...889)', amount: 'KES 82,400', status: 'Completed' },
  { id: '#PAY-7721', date: 'Oct 06, 2023', method: 'M-Pesa (0712...345)', amount: 'KES 38,200', status: 'Completed' },
  { id: '#PAY-6632', date: 'Sept 29, 2023', method: 'M-Pesa (0712...345)', amount: 'KES 15,800', status: 'Pending' },
  { id: '#PAY-5541', date: 'Sept 22, 2023', method: 'M-Pesa (0712...345)', amount: 'KES 52,000', status: 'Failed' },
];

const getStatusStyles = (status: string) => {
  switch (status) {
    case 'Completed': return 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20';
    case 'Pending': return 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20';
    case 'Failed': return 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20';
    default: return 'bg-muted text-muted-foreground border-border';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'Completed': return <CheckCircle2 className="w-3.5 h-3.5" />;
    case 'Pending': return <Clock className="w-3.5 h-3.5" />;
    case 'Failed': return <XCircle className="w-3.5 h-3.5" />;
    default: return null;
  }
};

export default function PayoutHistory() {
  return (
    <div className="bg-background border border-border rounded-3xl overflow-hidden shadow-sm">
      <div className="p-6 border-b border-border flex items-center justify-between bg-muted/5">
        <div>
          <h3 className="text-lg font-bold font-ubuntu">Payout History</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Review all your previous store withdrawals.</p>
        </div>
        <button className="text-secondary text-sm font-bold hover:underline flex items-center gap-1">
          Export All <Download className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-muted/30 text-muted-foreground text-[10px] uppercase tracking-wider font-bold">
              <th className="px-6 py-4">Payout ID</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Method</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {PAYOUT_HISTORY.map((payout) => (
              <tr key={payout.id} className="hover:bg-muted/10 transition-colors group">
                <td className="px-6 py-4 text-sm font-bold text-foreground group-hover:text-secondary transition-colors">{payout.id}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{payout.date}</td>
                <td className="px-6 py-4 text-sm font-medium text-foreground">{payout.method}</td>
                <td className="px-6 py-4 text-sm font-bold text-foreground">{payout.amount}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border ${getStatusStyles(payout.status)}`}>
                    {getStatusIcon(payout.status)}
                    {payout.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-[10px] font-bold text-secondary hover:underline flex items-center gap-1 ml-auto">
                    Receipt <ExternalLink className="w-3 h-3" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-4 bg-muted/5 border-t border-border flex items-center justify-center">
        <button className="text-sm font-bold text-muted-foreground hover:text-secondary transition-colors">
          View older payouts
        </button>
      </div>
    </div>
  );
}
