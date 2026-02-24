"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Loader2, ArrowLeft, ArrowRight, CreditCard } from "lucide-react";
import { axiosInstance } from "@/helper";

const PaymentsPage = () => {
    const [payments, setPayments] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [filter, setFilter] = useState("all");
    const [loading, setLoading] = useState(false);

    const fetchPayments = async () => {
        try {
            setLoading(true);
            const res = await axiosInstance.get(
                `/payments?page=${page}&limit=10&filter=${filter}`
            );
            const data = res.data;
            setPayments(data.data);
            setTotalPages(data.totalPages);
        } catch (err) {
            console.error("Failed to fetch payments:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPayments();
    }, [page, filter]);

    return (
        <div className="p-6 min-h-screen ">
            <Card className="shadow-md border border-gray-200">
                <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4">
                    <CardTitle className="text-2xl font-semibold flex items-center gap-2">
                        <CreditCard className="w-6 h-6 text-blue-600" />
                        Payments Dashboard
                    </CardTitle>

                    {/* Filters */}
                    <div className="flex gap-2 mt-3 sm:mt-0">
                        {["all", "this_month", "last_month"].map((f) => (
                            <Button
                                key={f}
                                onClick={() => {
                                    setPage(1);
                                    setFilter(f);
                                }}
                                variant={filter === f ? "default" : "outline"}
                                className={`capitalize ${filter === f
                                        ? "bg-blue-600 hover:bg-blue-700"
                                        : "hover:bg-gray-100"
                                    }`}
                            >
                                {f.replace("_", " ")}
                            </Button>
                        ))}
                    </div>
                </CardHeader>

                <CardContent>
                    {loading ? (
                        <div className="space-y-3">
                            {[...Array(5)].map((_, i) => (
                                <Skeleton key={i} className="h-10 w-full rounded-md" />
                            ))}
                        </div>
                    ) : payments.length === 0 ? (
                        <div className="text-center py-10 text-gray-500 text-sm">
                            No payments found.
                        </div>
                    ) : (
                        <div className="overflow-x-auto border rounded-lg mt-2">
                            <table className="min-w-full text-sm">
                                <thead className="bg-gray-100 text-gray-700 text-xs uppercase">
                                    <tr>
                                        <th className="p-3 text-left">Name</th>
                                        <th className="p-3 text-left">Email</th>
                                        <th className="p-3 text-left">Amount</th>
                                        <th className="p-3 text-left">Status</th>
                                        <th className="p-3 text-left">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {payments.map((p) => (
                                        <tr
                                            key={p.id}
                                            className="border-t hover:bg-gray-50 transition-colors"
                                        >
                                            <td className="p-3 font-medium">{p.name}</td>
                                            <td className="p-3 text-gray-600">{p.email}</td>
                                            <td className="p-3 font-semibold text-gray-800">
                                                ₹{p.amount}
                                            </td>
                                            <td className="p-3">
                                                <Badge
                                                    variant={
                                                        p.paymentStatus === "success"
                                                            ? "success"
                                                            : p.paymentStatus === "failed"
                                                                ? "destructive"
                                                                : "secondary"
                                                    }
                                                >
                                                    {p.paymentStatus}
                                                </Badge>
                                            </td>
                                            <td className="p-3 text-gray-500">
                                                {new Date(p.createdAt).toLocaleDateString("en-IN", {
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "numeric",
                                                })}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* Pagination */}
                    <div className="flex justify-between items-center mt-6">
                        <Button
                            disabled={page === 1}
                            onClick={() => setPage((p) => p - 1)}
                            variant="outline"
                            className="flex items-center gap-1"
                        >
                            <ArrowLeft className="w-4 h-4" /> Previous
                        </Button>

                        <span className="text-sm font-medium text-gray-700">
                            Page {page} of {totalPages}
                        </span>

                        <Button
                            disabled={page === totalPages}
                            onClick={() => setPage((p) => p + 1)}
                            variant="outline"
                            className="flex items-center gap-1"
                        >
                            Next <ArrowRight className="w-4 h-4" />
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default PaymentsPage;
