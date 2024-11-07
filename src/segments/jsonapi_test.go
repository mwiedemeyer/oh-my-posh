package segments

import (
	"errors"
	"testing"

	"github.com/jandedobbeleer/oh-my-posh/src/properties"
	"github.com/jandedobbeleer/oh-my-posh/src/runtime/mock"

	"github.com/stretchr/testify/assert"
)

func TestJSONAPISegmentEnabled(t *testing.T) {
	cases := []struct {
		caseName string
		url      string
		response string
		isError  bool
		expected bool
	}{
		{
			caseName: "Valid URL with response",
			url:      "https://jsonplaceholder.typicode.com/posts/1",
			response: `{"id": "1"}`,
			isError:  false,
			expected: true,
		},
		{
			caseName: "Valid URL with error response",
			url:      "https://api.example.com/data",
			response: ``,
			isError:  true,
			expected: false,
		},
		{
			caseName: "Empty URL",
			url:      "",
			response: ``,
			isError:  false,
			expected: false,
		},
	}

	for _, tc := range cases {
		t.Run(tc.caseName, func(t *testing.T) {
			env := new(mock.Environment)
			props := properties.Map{
				JSONAPIURL: tc.url,
			}

			env.On("HTTPRequest", tc.url).Return([]byte(tc.response), func() error {
				if tc.isError {
					return errors.New("error")
				}
				return nil
			}())

			cs := &JSONAPI{
				base: base{
					env:   env,
					props: props,
				},
			}

			enabled := cs.Enabled()
			assert.Equal(t, tc.expected, enabled)
		})
	}
}

func TestJSONAPISegmentTemplate(t *testing.T) {
	env := new(mock.Environment)
	props := properties.Map{
		JSONAPIURL: "https://jsonplaceholder.typicode.com/posts/1",
	}

	env.On("HTTPRequest", "https://jsonplaceholder.typicode.com/posts/1").Return([]byte(`{"key": "value"}`), nil)

	cs := &JSONAPI{
		base: base{
			env:   env,
			props: props,
		},
	}

	cs.Enabled()
	template := cs.Template()
	expectedTemplate := " {{ .Result }} "
	assert.Equal(t, expectedTemplate, template)
}
