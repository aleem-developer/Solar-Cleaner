import { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function ROICalculator() {
  // 🔢 User Inputs
  const [rows, setRows] = useState(10);
  const [monthlyBill, setMonthlyBill] = useState(20000);
  const [efficiencyLoss, setEfficiencyLoss] = useState(35);

  // 💰 Fixed Pricing (Your Concept)
  const UNIT_PRICE = 15000;        // PKR per device
  const INSTALLATION_PER_UNIT = 2000; // PKR per device

  // 📐 One row = one device
  const unitsNeeded = rows;

  // 💵 Cost Calculations
  const totalDeviceCost = unitsNeeded * UNIT_PRICE;
  const installationCost = unitsNeeded * INSTALLATION_PER_UNIT;
  const totalInvestment = totalDeviceCost + installationCost;

  // 📊 ROI Calculations
  const annualLossWithoutMaintenance =
    monthlyBill * 12 * (efficiencyLoss / 100);

  const annualSavings = annualLossWithoutMaintenance * 0.8; // 80% recovery

  const paybackPeriod =
    annualSavings > 0
      ? (totalInvestment / annualSavings).toFixed(1)
      : 'N/A';

  const fiveYearSavings = Math.max(
    0,
    annualSavings * 5 - totalInvestment
  ).toFixed(0);

  return (
    <section
      id="calculator"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FDB813] text-gray-900 px-4 py-2 rounded-full mb-4">
            <Calculator size={20} />
            <span className="font-semibold">ROI Calculator</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Calculate Your Savings
          </h2>
          <p className="text-xl text-gray-600">
            Pricing based on number of solar panel rows
          </p>
        </div>

        {/* CARD */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* INPUT SECTION */}
            <div className="space-y-6">
              {/* ROWS INPUT */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of Solar Panel Rows
                </label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  step="1"
                  value={rows}
                  onChange={(e) => setRows(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FDB813]"
                />
                <div className="text-center mt-2 text-lg font-bold text-[#0056b3]">
                  {rows} rows → {rows} devices required
                </div>
              </div>

              {/* MONTHLY BILL */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Monthly Electricity Bill (PKR)
                </label>
                <input
                  type="range"
                  min="5000"
                  max="200000"
                  step="5000"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FDB813]"
                />
                <div className="text-center mt-2 text-lg font-bold text-[#0056b3]">
                  PKR {monthlyBill.toLocaleString()}
                </div>
              </div>

              {/* EFFICIENCY LOSS */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Estimated Efficiency Loss (%)
                </label>
                <input
                  type="range"
                  min="10"
                  max="60"
                  step="5"
                  value={efficiencyLoss}
                  onChange={(e) => setEfficiencyLoss(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FDB813]"
                />
                <div className="text-center mt-2 text-lg font-bold text-red-600">
                  {efficiencyLoss}%
                </div>
              </div>
            </div>

            {/* RESULT SECTION */}
            <div className="bg-gradient-to-br from-[#0056b3] to-[#003d82] rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-[#FDB813]">
                Investment Summary
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between">
                  <span>Devices Required:</span>
                  <span className="font-bold">{unitsNeeded}</span>
                </div>
                <div className="flex justify-between">
                  <span>Device Cost:</span>
                  <span className="font-bold">
                    PKR {totalDeviceCost.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Installation Cost:</span>
                  <span className="font-bold">
                    PKR {installationCost.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-xl border-t border-[#FDB813] pt-3">
                  <span>Total Investment:</span>
                  <span className="font-bold text-[#FDB813]">
                    PKR {totalInvestment.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-6 space-y-3">
                <div className="flex justify-between">
                  <span>Annual Savings:</span>
                  <span className="font-bold text-[#FDB813]">
                    PKR{' '}
                    {annualSavings.toLocaleString(undefined, {
                      maximumFractionDigits: 0,
                    })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Payback Period:</span>
                  <span className="font-bold text-[#FDB813]">
                    {paybackPeriod} years
                  </span>
                </div>
                <div className="flex justify-between text-xl border-t border-white/20 pt-3">
                  <span>5-Year Net Savings:</span>
                  <span className="font-bold text-green-400">
                    PKR {Number(fiveYearSavings).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <button className="bg-[#FDB813] text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#FDB813]/90 transition transform hover:scale-105">
              Get Your Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
