import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/ApiDocs/CodeBlock";
import { ParamTable } from "@/components/ApiDocs/ParamTable";
import { ErrorTable } from "@/components/ApiDocs/ErrorTable";
import { InfoBox } from "@/components/ApiDocs/InfoBox";
import { Section } from "@/components/ApiDocs/Section";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const inputParameters = [
    {
      field: "portfolio_name",
      type: "string",
      required: true,
      description: "Name of the portfolio for which to calculate standard deviation.",
    },
    {
      field: "start_date",
      type: "date",
      required: true,
      description: "Starting date of the range; must be the first day of a month.",
    },
    {
      field: "end_date",
      type: "date",
      required: true,
      description: "Ending date of the range; must be the last day of a month.",
    },
  ];

  const errors = [
    { code: "400", message: "Invalid input data", description: "Missing or malformed parameters." },
    { code: "401", message: "Unauthorized", description: "Invalid or missing API key." },
    { code: "403", message: "Forbidden", description: "User not authorized to access this portfolio." },
    { code: "404", message: "Portfolio not found", description: "Portfolio name does not exist." },
    { code: "422", message: "Computation error", description: "Insufficient data points or invalid date range." },
    { code: "429", message: "Rate limit exceeded", description: "Too many requests." },
  ];

  const requestExample = `curl -X POST https://api.finmetrics.io/v1/analytics/standard-deviation \\
  -H "Authorization: Bearer sk_test_123" \\
  -H "Content-Type: application/json" \\
  -d '{
    "portfolio_name": "GrowthFund_2025",
    "start_date": "2025-01-01",
    "end_date": "2025-03-31"
  }'`;

  const responseExample = `{
  "portfolio_name": "GrowthFund_2025",
  "start_date": "2025-01-01",
  "end_date": "2025-03-31",
  "standard_deviation": 0.0071
}`;

  const authExample = `Authorization: Bearer YOUR_API_KEY
Content-Type: application/json`;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold text-primary">FinMetrics</div>
            <Badge variant="secondary" className="text-xs">API v1</Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <Badge variant="outline" className="mb-4">POST</Badge>
          <h1 className="text-5xl font-bold mb-4 docs-heading">
            Standard Deviation
          </h1>
          <p className="text-xl text-docs-text max-w-3xl">
            Calculate the statistical volatility (standard deviation) of a portfolio's returns within a specified date range.
          </p>
          
          <div className="mt-6 flex items-center gap-3">
            <div className="bg-muted px-4 py-2 rounded-lg font-mono text-sm">
              /v1/analytics/standard-deviation
            </div>
          </div>
        </div>

        <div className="space-y-16">
          {/* Authentication */}
          <Section id="authentication" title="Authentication">
            <p className="text-docs-text mb-6">
              All requests require an API key. Include your API key in the Authorization header using the Bearer token format.
            </p>
            <CodeBlock code={authExample} language="http" />
          </Section>

          <Separator />

          {/* Input Parameters */}
          <Section id="parameters" title="Input parameters">
            <p className="text-docs-text mb-6">
              The following parameters are required to calculate the standard deviation for a portfolio.
            </p>
            <ParamTable parameters={inputParameters} />
          </Section>

          <Separator />

          {/* Parameter Guardrails */}
          <Section id="guardrails" title="Parameter guardrails">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 docs-heading">portfolio_name</h3>
                <ul className="list-disc list-inside space-y-2 text-docs-text ml-2">
                  <li>Must be alphanumeric (letters, numbers, underscores only)</li>
                  <li>No spaces or special characters allowed</li>
                  <li>Length between 3 and 50 characters</li>
                  <li>Must map to a valid, accessible portfolio record in the database</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 docs-heading">start_date</h3>
                <ul className="list-disc list-inside space-y-2 text-docs-text ml-2">
                  <li>Must follow ISO format (<code className="code-inline">YYYY-MM-DD</code>)</li>
                  <li>Must be the <strong>first day of a month</strong></li>
                  <li>Cannot be the last day of a month</li>
                  <li>Must be earlier than <code className="code-inline">end_date</code></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 docs-heading">end_date</h3>
                <ul className="list-disc list-inside space-y-2 text-docs-text ml-2">
                  <li>Must follow ISO format (<code className="code-inline">YYYY-MM-DD</code>)</li>
                  <li>Must be the <strong>last day of a month</strong></li>
                  <li>Cannot be the first day of a month</li>
                  <li>Must be later than <code className="code-inline">start_date</code></li>
                </ul>
              </div>

              <InfoBox type="warning" title="Cross-field rules">
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li><code className="code-inline">start_date</code> and <code className="code-inline">end_date</code> cannot be the same</li>
                  <li>Date range cannot exceed 36 months</li>
                  <li>The combination of portfolio and date range must yield at least one valid record</li>
                </ul>
              </InfoBox>
            </div>
          </Section>

          <Separator />

          {/* Request Example */}
          <Section id="request" title="Example request">
            <p className="text-docs-text mb-6">
              Here's how to make a request to calculate the standard deviation for a portfolio.
            </p>
            <CodeBlock code={requestExample} language="bash" />
          </Section>

          <Separator />

          {/* Response Example */}
          <Section id="response" title="Example response">
            <p className="text-docs-text mb-6">
              A successful response returns the portfolio details and the calculated standard deviation.
            </p>
            <CodeBlock code={responseExample} language="json" />
          </Section>

          <Separator />

          {/* Error Handling */}
          <Section id="errors" title="Error handling">
            <p className="text-docs-text mb-6">
              The API uses standard HTTP status codes to indicate the success or failure of requests.
            </p>
            <ErrorTable errors={errors} />
          </Section>

          <Separator />

          {/* Formula Definition */}
          <Section id="formula" title="Formula definition">
            <p className="text-docs-text mb-6">
              The standard deviation is calculated using the sample standard deviation formula:
            </p>
            
            <div className="bg-muted/50 rounded-lg p-8 text-center my-6">
              <div className="text-2xl font-serif">
                σ = √[ Σ(x<sub>i</sub> - x̄)² / (n - 1) ]
              </div>
            </div>

            <div className="space-y-3 text-docs-text">
              <p><strong>Where:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>x<sub>i</sub></strong>: individual return value</li>
                <li><strong>x̄</strong>: mean of returns</li>
                <li><strong>n</strong>: number of data points</li>
              </ul>
            </div>
          </Section>

          <Separator />

          {/* Business Logic */}
          <Section id="logic" title="Business logic notes">
            <InfoBox type="info">
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>The API automatically retrieves daily returns for the specified portfolio and date range</li>
                <li>Non-month-aligned dates will be rejected</li>
                <li>Missing or incomplete data within the range will trigger a <code className="code-inline">422</code> error</li>
                <li>All computations are performed using the sample standard deviation method</li>
              </ul>
            </InfoBox>
          </Section>

          <Separator />

          {/* Versioning */}
          <Section id="limits" title="Versioning and limits">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 docs-heading">API Version</h3>
                <p className="text-docs-text">Current version: <Badge>v1</Badge></p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 docs-heading">Rate Limit</h3>
                <p className="text-docs-text">100 requests per minute per API key</p>
              </div>
            </div>
          </Section>
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-12 border-t border-border">
          <div className="text-center text-docs-text">
            <p>Need help? Contact us at <a href="mailto:support@finmetrics.io" className="text-docs-link hover:underline">support@finmetrics.io</a></p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
