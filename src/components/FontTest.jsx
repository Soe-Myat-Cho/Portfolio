// FontTest.jsx
export default function FontTest() {
  const sampleText = "The quick brown fox jumps over the lazy dog.";

  return (
    <div className="space-y-8 p-6">
      <h1 className="text-2xl font-bold">Font Style Comparison</h1>

      <div className="font-inter text-lg tracking-wide leading-relaxed">
        <p>
          <strong>Inter:</strong> {sampleText}
        </p>
      </div>

      <div className="font-nunito text-lg tracking-wide leading-relaxed">
        <p>
          <strong>Nunito:</strong> {sampleText}
        </p>
      </div>

      <div className="font-poppins text-lg tracking-wide leading-relaxed">
        <p>
          <strong>Poppins:</strong> {sampleText}
        </p>
      </div>

      <div className="font-openSans text-lg tracking-wide leading-relaxed">
        <p>
          <strong>Open Sans:</strong> {sampleText}
        </p>
      </div>

      <div className="font-workSans text-lg tracking-wide leading-relaxed">
        <p>
          <strong>Work Sans:</strong> {sampleText}
        </p>
      </div>
    </div>
  );
}
